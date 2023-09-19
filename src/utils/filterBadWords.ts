import {
  RegExpMatcher,
  TextCensor,
  englishDataset,
  englishRecommendedBlacklistMatcherTransformers,
  type CensorContext,
} from "obscenity";

const matcher = new RegExpMatcher({
  ...englishDataset.build(),
  ...englishRecommendedBlacklistMatcherTransformers,
});

const asteriskStrategy = (ctx: CensorContext) => "*".repeat(ctx.matchLength);
const censor = new TextCensor().setStrategy(asteriskStrategy);

export function wordFilter(input: string) {
  const matchesName = matcher.getAllMatches(input);
  return censor.applyTo(input, matchesName);
}
