import { resolve, join } from "https://deno.land/std@0.134.0/path/mod.ts";
import { opine, serveStatic } from "https://deno.land/x/opine@2.1.5/mod.ts";

const app = opine();
const client = join(resolve(), "client");

app.get("*.ts", async (req, res) => {
  const { files } = await Deno.emit(join(client, req.url), {
		check: false,
    bundle: "module",
    compilerOptions: {
      lib: ["dom", "dom.iterable", "esnext"],
    },
  });
  res.type("application/javascript").send(files["deno:///bundle.js"]);
});

app.use(serveStatic(client));

app.listen({ port: 3000 });
