export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/nithinK-142");
  return response.json();
};
