const { AUTO_PR_TITLE, validateTitle } = require('./validateTitle');

it('detects valid PR titles(with versions)', async () => {
  const inputs = [
    "feat: [R23.7A-1st] xxx",
    "feat: [R23.7A-1.5] xxx",
    "feat: [R23.7A-2nd] xxx",
    "fix: [R23.7A-hotfix] xxx",
    "feat: [R23.7B-1st] xxx",
    "feat: [R23.7B-1.5] xxx",
    "feat: [R23.7B-2nd] xxx",
    "fix: [R23.7B-hotfix] xxx"
  ];

  await expect(Promise.all(inputs.map(element => validateTitle(element)))).resolves.toEqual(inputs.map(() => undefined));
});

it('throws for PR titles with a wrong version', async () => {
  await expect(validateTitle("[R23.7B-1nd]")).rejects.toThrow(Error);
});

it('throws for PR titles with an unknown version', async () => {
  await expect(validateTitle("[R23.7B-fix]")).rejects.toThrow(Error);
});

it('skips due to AUTO PR', async () => {
  await expect(validateTitle(AUTO_PR_TITLE)).resolves.toBeUndefined();
});