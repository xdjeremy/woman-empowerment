import Image from 'next/image'
import Wave from '../assets/wave.svg'

const Explain = () => {
  return (
    <div className="bg-black px-14 pb-32">
      <h1 className="pt-24 text-center text-2xl font-bold text-white md:text-4xl">
        What <span className="underline">Makes</span> A{' '}
        <span className="text-pink">Woman</span> Empowered?
      </h1>
      <div className="flex flex-col items-center">
        <span className="mt-28 text-xl text-white">
          A woman whose voice is heard and who is given proper rights in all
          aspects of life is said to be woman empowerment.
        </span>
        <div className="mt-28 flex flex-row gap-11 text-white">
          <span className="text-justify">
            Women's right to participation and representation in all spheres of
            life is vital in fully realizing their role as agents and
            beneficiaries of development. Women comprise half of the country's
            population, and yet they hold only about one-fifth of government
            elected positions. Women in key positions in government have shown
            that they are as capable and effective as their male counterparts in
            assuming leadership and decision-making roles. While men can and do
            participate in crafting gender-responsive laws and programs, they
            cannot always nor fully represent the interests of women considering
            their differentiated needs, issues, socialization and experiences.
            Promoting women's representation in elected bodies allows them to
            contribute to development and nation-building, and ensure that
            governance leads to equal access to resources and to development
            results and outcomes for both women and men, girls and boys.
          </span>
          <span className="text-justify">
            While the country has made great strides in promoting and increasing
            women's political participation, with two women having held the
            highest position in government as President of the Republic of the
            Philippines, the proportion of women in politics or public office is
            still yet to meet the 30 percent “critical mass,” which scholars
            identify as the minimum percentage necessary for a minority group to
            be able to influence decision making. From 1998 to 2016, the
            percentage of women elected into public office ranged from 16.1
            percent to 21.44 percent, reaching its peak in the 2016 elections.
            In the 2019 National and Local Elections, only 20.16 percent (8,782)
            of the candidates were female.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Explain
