const AUTO_PR_TITLE = "chore: Auto PR to Main from Release Merged";
const IOE_PROD_VERSIONS_PATTERN = /\[R\d{2}\.\d{1,2}[A|B|C]\-(1st)|(1\.5)|(2nd)|(hotfix)\]/;

module.exports = {
  AUTO_PR_TITLE,
  validateTitle: async (title) => {
    const prTitle = title.trim();
    if (prTitle === AUTO_PR_TITLE) {
      console.log("It's an auto PR title should be skipped");
      return;
    }
    if (!IOE_PROD_VERSIONS_PATTERN.test(prTitle)) {
      throw new Error(
        `PR title 'MUST' put production version, for example:
                - [R23.7B-1st]
                - [R23.7B-1.5]
                - [R23.7B-2nd]
                - [R23.7A-hotfix]`
      );
    }
  }
};
