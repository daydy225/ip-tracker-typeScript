declare module 'dns' {
    interface Dns {
      resolve4(
        hostname: string,
        callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void
      ): void;
    }
  
    const dns: Dns;
    export default dns;
  }