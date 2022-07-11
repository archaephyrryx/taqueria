import { runTests } from '@vscode/test-electron';
import * as fse from 'fs-extra';
import * as path from 'path';

const testProjectDestination = path.resolve(__dirname, '../../out/vscode-taq-ligo-plugin-test-project');
const vsCodeUserData = path.resolve(__dirname, '../../.vscode-test/user-data');

async function main() {
	try {
		// The folder containing the Extension Manifest package.json
		// Passed to `--extensionDevelopmentPath`
		const extensionDevelopmentPath = path.resolve(__dirname, '../../out');

		// The path to the extension test script
		// Passed to --extensionTestsPath
		const extensionTestsPath = path.resolve(__dirname, '../../out/test/suite/index');

		fse.mkdirSync(testProjectDestination);

		const launchArgs = [`${testProjectDestination}/`, '--disable-extension'];

		// One of the option to run tests for each file and create folder separately

		// Download VS Code, unzip it and run the integration test
		await runTests({ extensionDevelopmentPath, extensionTestsPath, launchArgs });

		fse.rmdirSync(vsCodeUserData, { recursive: true });
		// fse.rmdirSync(path.resolve(testProjectDestination), {recursive: true})
	} catch (err) {
		console.error('Failed to run tests');

		if (fse.existsSync(vsCodeUserData)) {
			fse.rmdirSync(vsCodeUserData, { recursive: true });
		}
		if (fse.existsSync(testProjectDestination)) {
			fse.rmdirSync(testProjectDestination, { recursive: true });
		}
		process.exit(1);
	}
}

main();
