import { Card } from '@repo/ui/card';

export default function Home() {
  return (
    <div className="text-sm font-medium">
      Hello World
      <Card title="Hello" href="https://example.com">
        This is a card
      </Card>
    </div>
  );
}
