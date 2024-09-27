type GreetProps = { age?: number };

const Greet = ({ age = 21 }: GreetProps) => // etc

// using typeof as a shortcut; note that it hoists!
// you can also declare the type of DefaultProps if you choose
// e.g. https://github.com/typescript-cheatsheets/react/issues/415#issuecomment-841223219
type GreetProps = { age: number } & typeof defaultProps;

const defaultProps = {
  age: 21,
};

const Greet = (props: GreetProps) => {
  // etc
};
Greet.defaultProps = defaultProps;