import { Octokit } from "@octokit/core";
import type { APIRoute } from "astro";
import { object, safeParse, string, transform } from "valibot";
import { wordFilter } from "../../utils/filterBadWords";

const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;
const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

async function createIssue({
  name,
  message,
  avatarUrl,
}: {
  name: string;
  message: string;
  avatarUrl: string;
}) {
  const r = await octokit.request("POST /repos/{owner}/{repo}/issues", {
    owner: "lmssiehdev",
    repo: "portfolio",
    title: `[AUTOMATIC SUBMISSION] by ${name}`,
    body: `${message}` + `\n avatar: ${avatarUrl}`,
    labels: ["guest book submission"],
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
}

export const post: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const guestBookInputSchema = transform(
    object({
      message: string(),
      name: string(),
      avatarUrl: string(),
    }),
    ({ message, name, avatarUrl }) => ({
      message: wordFilter(message),
      name: wordFilter(name.substring(0, 10)),
      avatarUrl: wordFilter(avatarUrl),
    })
  );

  const parsedInput = safeParse(guestBookInputSchema, {
    name: data.get("name"),
    message: data.get("message"),
  });

  if (!parsedInput.success) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }

  const { message, name, avatarUrl } = parsedInput.output;

  console.log({
    message,
    name,
  });

  await createIssue({
    name,
    message,
    avatarUrl,
  });

  console.log("issue submitted successfully!");

  return new Response(
    JSON.stringify({
      message: "Success!",
    }),
    { status: 200 }
  );
};
