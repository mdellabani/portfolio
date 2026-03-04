import emailjs from 'emailjs-com';
import {memo, useCallback, useMemo, useRef, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const form = useRef(null);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      /**
       * This is a good starting point to wire up your form submission logic
       * */
      console.log('Data to send: ', data);
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          form.current!,
          process.env.NEXT_PUBLIC_PUBLIC_KEY!,
        )
        .then(
          _result => {
            alert('Message Sent, I will get back to you shortly :)!');
          },
          error => {
            alert('An error occurred, Please try again!');
            console.log(error);
          },
        );
    },
    [data],
  );

  const inputClasses =
    'bg-retro-base border border-retro-border focus:border-retro-green focus:outline-none focus:ring-1 focus:ring-retro-green rounded-none placeholder:text-retro-muted placeholder:text-sm text-retro-text text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage} ref={form}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="mx-auto w-max border border-retro-green bg-retro-base px-4 py-2 text-sm font-medium text-retro-green shadow-md outline-none hover:bg-retro-surface focus:ring-2 focus:ring-retro-green focus:ring-offset-2 focus:ring-offset-retro-base"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
