import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "", // ID of a Compose-compatible space to be used \
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "", // delivery API key for the space \
});

type GetPageParams = {
  pageContentType: string;
  slug: string;
  locale: string;
};

export async function getPage(params: GetPageParams) {
  const query = {
    limit: 1,
    include: 10,
    locale: params.locale,
    "fields.slug": params.slug,
    content_type: params.pageContentType,
  };
  const {
    items: [page],
  } = await client.getEntries(query);
  return page || null;
}

export async function getOpsPage(params: GetPageParams) {
  const query = {
    limit: 1,
    include: 10,
    locale: params.locale,
    "fields.programKey": params.slug,
    content_type: params.pageContentType,
  };
  const {
    items: [page],
  } = await client.getEntries(query);
  return page || null;
}

export async function getPageById(id: string) {
  const page = await client.getEntry(id);
  return page || null;
}
