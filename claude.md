# Project Instructions for Claude

## Session Documentation
- Always create session documentation in docs/ folder
- Use timestamp format: YYYY-MM-DD_session-name.md
- Include all user requests and Claude actions
- Document technical solutions and learnings

🤔 My Recommendation

Start with option #3 (simple request pattern) since it's guaranteed to work across
all Claude Code clients. Then explore if your specific Claude Code client has
built-in session documentation features.

The pattern "Document this session" at the end will become second nature, and I'll
always know to create the comprehensive technical documentation you found
valuable! 📚

---

For VS Code with the Claude Code extension, here are your options:

🔧 VS Code Extension Settings

1️⃣ Check Extension Settings

File → Preferences → Settings → Extensions → Claude Code
Look for settings like:
- "Auto-generate session summaries"
- "Session documentation"
- "Chat history export"
- "Custom instructions"

2️⃣ Claude Code User Settings

The extension might have a settings file or user preferences. Check:
- Command Palette: Ctrl+Shift+P → "Claude Code: Settings"
- Look for .claude or similar config files in your workspace

3️⃣ Custom Instructions (If Available)

Some versions allow custom system instructions. Add:
At the end of development sessions, create comprehensive documentation in docs/
folder with timestamp filename including all user requests, actions taken,
technical solutions, and key learnings.

📝 VS Code Workspace Settings

4️⃣ Project-Level Instructions

Create .vscode/settings.json in your project:
{
"claude-code.customInstructions": "Auto-document sessions in docs/ folder with
technical details",
"claude-code.sessionDocumentation": true
}
(Note: These are hypothetical settings - check what's actually available)

🎯 Reliable Fallback

5️⃣ VS Code Snippets

Create a snippet for quick session documentation requests:
File → Preferences → Configure User Snippets → markdown.json
{
"Document Session": {
"prefix": "docsession",
"body": [
"Document this session in docs/ folder with timestamp filename"
]
}
}
Then just type docsession + Tab to quickly request documentation.

🔍 How to Check

1. Open Claude Code panel in VS Code
2. Look for gear/settings icon in the Claude chat interface
3. Check Command Palette: Ctrl+Shift+P → search "Claude"
4. Extension details: Extensions panel → Claude Code → gear icon

Want me to help you check what specific settings are available in your Claude Code
extension?

> wow, ok. i didn't have any extensions installed. I found this extension: Claude
Code Assistant for VSCode. is that the right one?

● Actually, let me clarify! The official Claude Code extension from Anthropic might
have a different name or might not be publicly available yet.

🔍 Let's Verify the Right Extension

Check These Details:

1. Publisher name - Is it "Anthropic" or someone else?
2. Extension ID - What's the exact name and ID?
3. Install count - How many downloads does it have?
4. Last updated - Is it recently maintained?

🎯 Official Claude Code

Based on our conversation, you've been using Claude Code CLI (the terminal-based
tool). The VS Code extension ecosystem for Claude might include:

1. Official Anthropic extension (if available)
2. Third-party Claude integrations
3. Community-built extensions

⚠️ Be Careful With Extensions

Since Claude Code handles sensitive data (your code, API keys), make sure any
extension is:
- From a trusted publisher
- Well-reviewed
- Recently updated
- Has clear privacy policies

🤔 My Recommendation

Before installing, can you share:
1. The exact extension name and publisher?
2. Number of installs/ratings?

This way we can verify it's legitimate and will actually give you the session
documentation features you want!

You might also want to check Anthropic's official docs to see what VS Code
integrations they officially support.