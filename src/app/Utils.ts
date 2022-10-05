import { parse, UrlWithParsedQuery } from "url";

// with this comment ignore next function for testing
/* istanbul ignore next */
export class Utils {
    public static toUCase(arg:string): string {
        return arg.toUpperCase();
    }
    public static parseUrl(url: string): UrlWithParsedQuery {
        if (!url) {
            throw new Error('Empty url!');

        }
        return parse(url, true);

    }

}