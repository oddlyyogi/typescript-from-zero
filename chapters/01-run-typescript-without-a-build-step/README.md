# Chapter 1: Run TypeScript Without a Build Step

Your first typed file, run directly by Node.

```bash
npm install
npm start        # node hello.ts
npm run check    # type-check hello.ts with tsc
```

`status.ts` is the one file Node cannot run: it uses an `enum`, which type stripping does not support.

```bash
node status.ts   # ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX
```
