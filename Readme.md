## File Manager via CLI
using Node.js APIs

```
npm run start -- --username=your_username
```

Starts working directory is current user's home directory.

List of operations and their syntax:

**Navigation & working directory:**
- `up` – go upper from current directory.
- `cd path_to_directory` – go to dedicated folder from current directory.
- `ls` – show list of folders and files in current directory.

**Basic operations with files:**
- `cat path_to_file` – read file and print it's content in console. *(Readable stream)*
- `add new_file_name` – create empty file in current working directory.
- `rn path_to_file new_filename` – rename file (content should remain unchanged).
- `cp path_to_file path_to_new_directory` – copy file. *(Readable and Writable streams)*
- `mv path_to_file path_to_new_directory` – move file. *(Readable and Writable streams)*
- `rm path_to_file` – delete file.

**Operating system info**
- `os --EOL` – get EOL (default system End-Of-Line) and print it to console.
- `os --cpus` – get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them) and print it to console.
- `os --homedir` – get home directory and print it to console.
- `os --username` – get current system user name (Do not confuse with the username that is set when the application starts) and print it to console.
- `os --architecture` – get CPU architecture for which Node.js binary has compiled and print it to console.

**Hash calculation**
- `hash path_to_file` – Calculate hash for file and print it into console.

**Compress and decompress operations**
- `compress path_to_file path_to_destination` – Compress file *(Brotli algorithm, Streams API)*.
- `decompress path_to_file path_to_destination` – Decompress file *(Brotli algorithm, Streams API)*.
