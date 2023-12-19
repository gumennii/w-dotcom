import {
  UniformPlayground,
  type UniformPlaygroundProps,
} from "@uniformdev/canvas-next-rsc";
import { resolveComponent } from "../../canvas";

export default function PlaygroundPage(props: {
  searchParams: UniformPlaygroundProps["searchParams"];
}) {
  return <UniformPlayground {...props} resolveComponent={resolveComponent} />;
}
