const selectQuestion = document.querySelector('.menu-question');
const answersPlace = document.querySelector('.answers');

selectQuestion.addEventListener('click', async (event) => {
  const buttonId = event.targert.id;

  const response = await fetch(`/faq/${buttonId}`, {
    method: 'POST',
  });

  console.log(response);
  const result = await response.json();
  console.log(result);
});
