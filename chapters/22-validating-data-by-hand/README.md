# Chapter 22: Validating Data by Hand: Parse, Don't Trust

Types vanish at runtime, so untrusted data needs real checks. We write a ticket validator live: unknown input, field-by-field checks, a union guard, a Result type, and why no type assertion is needed.

```bash
npm install
npm start
npm run check
```
