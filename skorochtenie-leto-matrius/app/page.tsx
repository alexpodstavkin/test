import Hero from '@/components/Hero';
import SummerProblem from '@/components/SummerProblem';
import Gifts from '@/components/Gifts';
import Skills from '@/components/Skills';
import Method from '@/components/Method';
import Result from '@/components/Result';
import BookingForm from '@/components/BookingForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <SummerProblem />
      <Gifts />
      <Skills />
      <Method />
      <Result />
      <BookingForm />
      <footer className="footer">
        © {new Date().getFullYear()} Matrius — онлайн-школа развития детей
      </footer>
    </main>
  );
}
