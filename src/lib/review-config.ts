export interface ReviewConfig {
  editorialRepository: string;
  publicRepository: string;
  reviewerLogin: string;
  editorialBranch: string;
  publicBranch: string;
}

const valueOr = (value: string | undefined, fallback = "") => value?.trim() || fallback;

export const reviewConfig: ReviewConfig = {
  editorialRepository: valueOr(import.meta.env.PUBLIC_NEWS_EDITORIAL_REPOSITORY),
  publicRepository: valueOr(import.meta.env.PUBLIC_NEWS_PUBLIC_REPOSITORY),
  reviewerLogin: valueOr(import.meta.env.PUBLIC_NEWS_REVIEWER_LOGIN),
  editorialBranch: valueOr(import.meta.env.PUBLIC_NEWS_EDITORIAL_BRANCH, "main"),
  publicBranch: valueOr(import.meta.env.PUBLIC_NEWS_PUBLIC_BRANCH, "main")
};

export function missingReviewConfiguration(config = reviewConfig): string[] {
  return [
    !config.editorialRepository && "PUBLIC_NEWS_EDITORIAL_REPOSITORY",
    !config.publicRepository && "PUBLIC_NEWS_PUBLIC_REPOSITORY",
    !config.reviewerLogin && "PUBLIC_NEWS_REVIEWER_LOGIN",
    !config.editorialBranch && "PUBLIC_NEWS_EDITORIAL_BRANCH",
    !config.publicBranch && "PUBLIC_NEWS_PUBLIC_BRANCH"
  ].filter(Boolean) as string[];
}
