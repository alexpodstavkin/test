'use client'

import { FormEvent, useState } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function LeadForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState({
    parentName: '',
    email: '',
    phone: '',
    consent: true,
  })

  const onChange = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const formatPhone = (raw: string) => {
    const d = raw.replace(/\D/g, '').slice(0, 11)
    if (d.length === 0) return ''
    const norm = d.startsWith('8') ? '7' + d.slice(1) : d.startsWith('7') ? d : '7' + d
    const p = norm.padEnd(11, '_')
    return `+7 (${p.slice(1, 4)}) ${p.slice(4, 7)}-${p.slice(7, 9)}-${p.slice(9, 11)}`
  }

  const onPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, phone: formatPhone(e.target.value) }))
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (!form.consent) {
      setStatus('error')
      setErrorMsg('Нужно согласие на обработку персональных данных')
      return
    }
    setStatus('submitting')
    setErrorMsg('')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          parentName: form.parentName,
          email: form.email,
          phone: form.phone,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.ok === false) {
        throw new Error(data.error || 'Не удалось отправить заявку. Попробуйте ещё раз.')
      }
      setStatus('success')
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Ошибка сети'
      setStatus('error')
      setErrorMsg(message)
    }
  }

  if (status === 'success') {
    return (
      <div className="signup-success">
        <div className="signup-success-icon" aria-hidden>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3>Заявка принята</h3>
        <p>Спасибо за&nbsp;заявку. Менеджер скоро свяжется с&nbsp;вами и&nbsp;подтвердит время урока.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="signup-form" noValidate>
      <input
        type="text"
        name="parentName"
        value={form.parentName}
        onChange={onChange('parentName')}
        placeholder="Ваше имя (родитель)"
        autoComplete="name"
        required
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={onChange('email')}
        placeholder="Электронная почта"
        autoComplete="email"
        required
      />
      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={onPhone}
        placeholder="+7 (___) ___-__-__"
        autoComplete="tel"
        required
      />
      <label className="consent">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={onChange('consent')}
        />
        <span>Я&nbsp;согласен(а) на&nbsp;обработку персональных данных в&nbsp;соответствии с&nbsp;политикой конфиденциальности.</span>
      </label>
      {status === 'error' && (
        <div role="alert" className="form-error">{errorMsg}</div>
      )}
      <button type="submit" className="btn" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Отправляем…' : 'Записать ребёнка'}
      </button>
    </form>
  )
}
