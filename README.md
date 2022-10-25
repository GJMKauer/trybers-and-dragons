# Boas vindas ao repositório do projeto <b>Trybers and Dragons</b>!

Esse projeto foi desenvolvido durante o módulo de Backend na Trybe! #vqv 

Aqui você vai encontrar os detalhes de como foi o desenvolvimento do projeto e quais foram os requisitos técnicos necessários para a entrega do desafio.

---

# Habilidades desenvolvidas

Neste projeto, fui capaz de:

- Utilizar TypeScript;
- Utilizar os princípios do POO para criar uma estrutura de um jogo de RPG (_Role-Playing Game_);
- Utilizar os princípios da arquitetura SOLID para organizar o projeto e deixá-lo com uma manutenibilidade muito maior. 
   
---

# POO

O paradigma da POO (**P**rogramação **O**rientada a **O**bjetos) é um modelo de análise, projeto e programação baseado na aproximação entre o mundo real e o mundo virtual, através da criação e interação entre objetos, atributos, códigos, métodos, entre outros.

---

# SOLID

O SOLID é um facilitador que torna o código mais coeso, além de mais fácil de manter, estender, adaptar e ajustar conforme alterações de escopo. Além disso, ele faz com que o código seja testável e de fácil entendimento, extensível e forneça o máximo de reaproveitamento. O termo SOLID é um acrônimo que representa cinco ideias, originadas pelo famoso Robert Cecil Martin, e significam:

- Single Responsability Principle (Princípio da Responsabilidade Única);
- Open/Closed Principle (Princípio Aberto/Fechado);
- Liskov Substitution Principle (Princípio da substituição de Liskov);
- Interface Segregation Principle (Princípio da Segregação de Interface);
- Dependency Inversion Principle (Princípio da Inversão de Dependência).

Para mais detalhes, sugiro acessar documentações oficiais.

---

# Funcionamento da aplicação

Para iniciar o projeto, é necessário possuir o [Docker](https://docs.docker.com/engine/install/ubuntu/) instalado.

Após clonar o projeto em seu computador, para iniciá-lo é necessário executar o comando
```
docker-compose up -d && docker exec -it trybers_and_dragons bash
```
e na sequência execute o comando
```
npm install
```

na pasta raíz do projeto. Isso fará com que os containers docker sejam orquestrados e a aplicação esteja disponível.

O projeto trata-se de um desafio para consolidar o aprendizado de TypeScript junto com os princípios da Programação Orientada a Objetos (POO) e SOLID. Com isso, criamos um sistema de um jogo de RPG (_Role-Playing Gaming_) em que são criados jogadores (que têm raças e arquétipos), monstros, dragões e um sistema de luta PVP (_Player vs Player_ - Jogador vs Jogador) e PVE (_Player vs Environment_ - Jogador vs Ambiente).

---

# Histórico de Commits

É possível verificar todo o histórico de commits do projeto, de modo a visualizar passo-a-passo como foi desenvolvido o meu raciocínio até a finalização do projeto.

---

# Requisitos técnicos do desafio:

- ✅ 1. Crie a classe Race.

- ✅ 2. Crie classes que herdam de Race.

- ✅ 3. Crie a interface Energy.

- ✅ 4. Crie a classe Archetype.

- ✅ 5. Crie classes que herdam de Archetype.

- ✅ 6. Crie a interface Fighter.

- ✅ 7. Crie a classe Character.

- ✅ 8. Crie a interface SimpleFighter.

- ✅ 9. Crie a classe Monster.

- ✅ 10. Crie a classe PVP.

# REQUISITOS BÔNUS

- ✅ 11. Crie a classe PVE.

- ✅ 12. Crie a classe Dragon.

- ✅ 13. Crie objetos no arquivo index.