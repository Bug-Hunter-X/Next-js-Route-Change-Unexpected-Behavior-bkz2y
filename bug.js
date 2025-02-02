```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/another-page');
    // ... some more code that depends on the route change ...
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

export default MyComponent; 
```