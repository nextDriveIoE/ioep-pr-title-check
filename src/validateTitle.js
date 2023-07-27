const IOE_PROD_VERSIONS_PATTERN = /\[R\d{2}\.\d{1,2}[A|B|C]\-(1st)|(1\.5)|(2nd)|(hotfix)\]/;

module.exports = async function validateTitle(title) {
  if (!IOE_PROD_VERSIONS_PATTERN.test(title)) {
    throw new Error(
      `PR title 'MUST' put production version, for example:
      - [R23.7B-1st]
      - [R23.7B-1.5]
      - [R23.7B-2nd]
      - [R23.7A-hotfix]`
    );
  }
};
