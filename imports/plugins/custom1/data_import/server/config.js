import Elasticsearch from "elasticsearch";
import { Logger } from "/server/api";

const host = process.env.ELASTICSEARCH_HOST;
const auth = process.env.ELASTICSEARCH_AUTH;

if (!host || !auth) {
  Logger.error("Missing Elasticsearch configuration!!");
  Logger.error("Make sure you set ELASTICSEARCH_HOST and ELASTICSEARCH_AUTH env vars");
}

export const client = new Elasticsearch.Client({ hosts: [{ host, auth }] });
