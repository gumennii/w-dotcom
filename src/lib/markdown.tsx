import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { marked } from "marked";

interface Asset {
  sys: {
    id: string;
  };
  url: string;
  description: string;
}

interface AssetLink {
  block: Asset[];
}

interface Content {
  json?: any; // EntryFieldTypes.RichText / Rich text
  string?: string; // EntryFieldTypes.Text / Long text
  links?: {
    assets: AssetLink;
  };
}

function RichTextAsset({ id, assets }: { id: string; assets: Asset[] | undefined }) {
  const asset = assets?.find(asset => asset.sys.id === id);

  if (asset?.url) {
    return <Image src={asset.url} layout="fill" alt={asset.description} />;
  }

  return null;
}

export function Markdown({ content }: { content: Content }) {
  if (content.string) {
    return <div dangerouslySetInnerHTML={{ __html: marked.parse(content.string) }} className="prose" />;
  } else {
    return documentToReactComponents(content.json, {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
          <RichTextAsset id={node.data.target.sys.id} assets={content.links?.assets.block} />
        ),
      },
    });
  }
}
