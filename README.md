1. 使用tsd进行声明式的类型检查

```typescript
import { expectType } from 'tsd';

expectType<string>("baidu"); // √
expectType<string>(666); // ×
```

