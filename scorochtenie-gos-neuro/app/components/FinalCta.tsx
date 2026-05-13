import LeadForm from './LeadForm'

export default function FinalCta() {
  return (
    <section className="final-cta" id="signup">
      <div className="container">
        <p className="signup-heading">
          Для&nbsp;участия в&nbsp;национальном проекте родителю необходимо заполнить форму записи
        </p>
        <div className="final-box">
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
