import { useState } from 'react'
const intialState = {
  name: '',
  email: '',
  message: '',
}

const Contact = () => {
  const [form, setForm] = useState(intialState)
  const [message, setMessage] = useState('Send Message')

  const handelChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setMessage('Sending...')
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      }).then((res) => {
        if (res.status === 200) {
          setMessage('Message Sent')
          setForm(intialState)
        } else {
          setMessage('Error')
        }
      })
    } catch (error) {
      setMessage('Error')
    }
    setTimeout(() => {
      setMessage('Send Message')
    }, 5000)
  }

  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-[500px]">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
        Contact me
      </h1>
      <form className="space-y-8" onSubmit={onSubmit}>
        <div>
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handelChange}
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handelChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="example@example.com"
            required
          />
        </div>

        <div className="sm:col-span-2">
          <label
            for="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handelChange}
            rows="6"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="custom-button py-2 px-4 text-lg"
          disabled={message === 'Sending...'}
        >
          {message}
        </button>
      </form>
    </div>
  )
}

export default Contact
