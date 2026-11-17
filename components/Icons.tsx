type P = { className?: string };

export const YoutubeIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
  </svg>
);

export const InstagramIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
    <circle cx="12" cy="12" r="4.3" />
    <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const TiktokIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M16.6 2h-3.4v13.4a3.1 3.1 0 1 1-3.1-3.1c.3 0 .6 0 .9.1V9a6.5 6.5 0 1 0 5.6 6.4V8.6a8 8 0 0 0 4.7 1.5V6.7a4.7 4.7 0 0 1-4.7-4.7Z" />
  </svg>
);

export const WhatsappIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
    <circle cx="16" cy="16" r="16" fill="#fff" />
    <path
      fill="#000"
      d="M16 5.5A10.5 10.5 0 0 0 7 21.4L5.6 26.5l5.2-1.4A10.5 10.5 0 1 0 16 5.5Zm0 19.1a8.6 8.6 0 0 1-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.6 8.6 0 1 1 16 24.6Zm4.7-6.4c-.3-.1-1.5-.8-1.8-.8-.2-.1-.4-.1-.6.1l-.8 1c-.2.2-.3.2-.6.1a7 7 0 0 1-3.5-3c-.3-.5.3-.5.8-1.5.1-.2 0-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z"
    />
  </svg>
);
