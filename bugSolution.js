```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = async () => {
    const result = await router.push('/another-page');
    if (result.error) {
      console.error('Navigation failed:', result.error);
    } else {
      // ... code that should only run AFTER the route change completes ...
      console.log('Navigation successful!');
    }
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

export default MyComponent;
```