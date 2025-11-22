const fs = require("fs");
const path = require("path");

const sourseDir = path.join(__dirname, 'output', 'messy-files');
const organizedDir = path.join(__dirname, 'output', 'organized');

const categories = {
    images: [".jpg", ".jpeg", ".png", "svg"],
    documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
    videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
    audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
    code: [".js", ".py", ".java", ".cpp", ".html", "css"],
    archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
    spreadsheets: [".xls", ".xlsx", ".csv"],
    others: [],
}

const testFiles = [
    "vacation.jpg",
    "report.pdf",
    "presentation.pptx",
    "music.mp3",
    "video.mp4",
    "script.js",
    "data.csv",
    "archive.zip",
    "photo.png",
    "notes.txt",
    "app.py",
    "movies.avi",
    "song.wav",
    "backup.tar.gz",
    "random.xyz",
    "Nodejs.zip",
]

function initializeDirectories() {
    if (!fs.existsSync(sourseDir)) {
        fs.mkdirSync(sourseDir, { recursive: true });
        testFiles.forEach((file) => {
            fs.writeFileSync(path.join(sourseDir, file), `Content of ${file}`)
        });
    }
    console.log("Messy directories file are created successfully");

    if (!fs.existsSync(organizedDir)) {
        fs.mkdirSync(organizedDir, { recursive: true });

        Object.keys(categories).forEach(category => {
            const categoryPath = path.join(organizedDir, category);
            if (!fs.existsSync(categoryPath)) {
                fs.mkdirSync(categoryPath)
            }
        })
    }
}

function getCategory(filename) {
    const ext = path.extname(filename).toLowerCase();
    for (const [category, extension] of Object.entries(categories)) {
        if (extension.includes(ext)) {
            return category
        }
    }
    return "Others"
}

function organizeFiles() {
    console.log("File organizer \n");
    console.log("source: ", sourseDir);
    console.log("Destination: ", organizedDir);
    console.log("\n" + "-".repeat(50) + "\n");

    const files = fs.readdirSync(sourseDir)
    if (files.length === 0) {
        console.log("No files to work on!");
        return
    }
    console.log(`found ${files.length} files to organized \n`);

    const stats = {
        total: 0,
        byCategory: {}
    }

    files.forEach(file => {
        const sourcePath = path.join(sourseDir, file);
        const stat = fs.statSync(sourcePath);
        if (stat.isDirectory()) {
            return;
        }
        const category = getCategory(file);
        const destDir = path.join(organizedDir, category);
        const destPath = path.join(destDir, file);

        fs.copyFileSync(sourcePath, destPath)

        stats.total++;
        stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;

        console.log(`${file}`);
        console.log(`${category}`);
        console.log(`${stat.size}`);
    })
}

function showHelp() {
    console.log(`
        file organizer - usage:

        commands: init - create files
        organize - organized files into categories

        example: 
        node file-organizer init
        node file-organizer organize
        `);
}

const commands = process.argv[2]

switch (commands) {
    case 'init':
        initializeDirectories();
        break;
    case 'organize':
        organizeFiles();
        break;

    default:
        showHelp();
        break;
}
// initializeDirectories();

