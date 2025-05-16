type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className=" py-6">
      <div className="container mx-auto text-center">
        <blockquote className="text-sm italic">
          "Se está difícil, é sinal de que você está avançando!"
          <cite className="block mt-2 font-medium">Alexandre Soares</cite>
        </blockquote>
      </div>
    </footer>
  );
}
