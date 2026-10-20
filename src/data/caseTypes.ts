export type Block =
  | { t: "section"; label: string; heading: string; body: string }
  | { t: "image"; src: string; alt: string; caption?: string; wide?: boolean }
  | { t: "video"; src: string; alt?: string; caption?: string; wide?: boolean }
  | { t: "grid"; cols: 2 | 3; items: { src: string; alt: string }[] }
  | { t: "stat"; items: { num: string; cap: string }[] }
  | { t: "quote"; text: string; by?: string };
