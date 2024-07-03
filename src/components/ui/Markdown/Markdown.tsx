import cn from "@/utils/cn";
import { marked } from "marked";

export type MarkdownProps = {
  content: string;
  className?: string;
};

/**
 * RichText UI component used for Contentful `EntryFieldTypes.Text` / Long text rendering
 */
export const Markdown = ({ content, className }: MarkdownProps) => {
  return <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }} className={cn("prose", className)} />;
};
