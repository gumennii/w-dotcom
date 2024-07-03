import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { BLOCKS } from "@contentful/rich-text-types";
import { ReactNode } from "react";
import cn from "@/utils/cn";

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

export type RichTextProps = {
  content: Document;
  links?: {
    assets: AssetLink;
  };
  className?: string;
};

function RichTextAsset({ id, assets }: { id: string; assets: Asset[] | undefined }) {
  const asset = assets?.find(asset => asset.sys.id === id);

  if (asset?.url) {
    return <Image src={asset.url} layout="fill" alt={asset.description} />;
  }

  return null;
}

/**
 * RichText UI component used for Contentful `EntryFieldTypes.RichText` / Rich text rendering
 */
export const RichText = ({ content, links, className }: RichTextProps): ReactNode => {
  return (
    <div className={cn("prose", className)}>
      {documentToReactComponents(content, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
            <RichTextAsset id={node.data.target.sys.id} assets={links?.assets.block} />
          ),
        },
      })}
    </div>
  );
};
