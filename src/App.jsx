import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

function App() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeLetters, setIncludeLetters] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let chars = '';
    if (includeLetters) chars += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) chars += '0123456789';
    if (includeSymbols) chars += '!@#$%^&*()_+[]{}|;:,.<>?';

    if (!chars) {
      setPassword('Please select at least one option.');
      return;
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 rounded-2xl shadow-lg bg-gray-400">
        <h1 className="text-3xl font-bold text-center mb-4">Password Generator</h1>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm">Password Length</label>
            <Input
              type="number"
              value={length}
              min={4}
              max={64}
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>
          <div className="flex items-center justify-between">
            <label>Include Letters</label>
            <Switch checked={includeLetters} onCheckedChange={setIncludeLetters} />
          </div>
          <div className="flex items-center justify-between">
            <label>Include Numbers</label>
            <Switch checked={includeNumbers} onCheckedChange={setIncludeNumbers} />
          </div>
          <div className="flex items-center justify-between">
            <label>Include Symbols</label>
            <Switch checked={includeSymbols} onCheckedChange={setIncludeSymbols} />
          </div>
          <Button onClick={generatePassword} className="w-full mt-4">Generate Password</Button>
          <div className="mt-4 p-2 bg-gray-700 rounded text-center break-all">
            {password || 'Your generated password will appear here'}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
