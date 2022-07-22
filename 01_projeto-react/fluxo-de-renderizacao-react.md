# O que é o fluxo de renderização?

1. React cria elementos na sua virtual DOM
2. React compara elementos da virtual DOM com elementos do DOM real
3. Se os componenentes forem distintos React os reacria

# O que o memo faz?

O memo apenas compara as props atutais do componente com as props antigas e se elas não forem distintas, impede que o componente entre no fluxo de renderização

# Quando utilizar memo?
- Se o componente renderiza com frequência
- Componentes funcionais puros (pure functions) - as entradas (inputs) sempre produzem mesmas saídas (output)
- Componentes médios a grandes