import React, { useState } from 'react';
import { Box, Button, VStack, HStack, Select } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("// Write your code here");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleRunCode = () => {
    // In a real application, you would send the code to a backend for execution
    console.log("Running code:", code);
    alert("Code execution is not implemented in this demo. Check the console for the code.");
  };

  return (
    <VStack spacing={4} align="stretch">
      <HStack>
        <Select value={language} onChange={handleLanguageChange}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </Select>
        <Button colorScheme="blue" onClick={handleRunCode}>Run Code</Button>
      </HStack>
      <Box border="1px" borderColor="gray.200" borderRadius="md" overflow="hidden">
        <Editor
          height="400px"
          language={language}
          value={code}
          onChange={handleEditorChange}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
          }}
        />
      </Box>
    </VStack>
  );
};

export default CodeEditor;