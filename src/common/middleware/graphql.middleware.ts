import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";
import { query, mutation } from "@/common/graphQLClient";

const source = {
  ...query,
  ...mutation,
};

@Injectable()
export class GraphQLMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { method, path, body } = req;
    const { variables } = body;

    const key = path.slice(1).split("/").join("_");
    Object.assign(req.body, {
      variables,
      query: source[key],
    });

    Object.assign(req, {
      url: "/graphql",
      baseUrl: "/graphql",
      originalUrl: "/graphql",
    });
    console.log(`${method} ${path}`);
    next();
  }
}
