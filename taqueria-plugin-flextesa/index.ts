import { Option, Plugin, PositionalArg, Task } from '@taqueria/node-sdk';
import proxy from './proxy';

Plugin.create(_i18n => ({
	alias: 'flextesa',
	schema: '1.0',
	version: '0.1',
	tasks: [
		Task.create({
			task: 'start sandbox',
			command: 'start sandbox [sandboxName]',
			aliases: ['start flextesa'],
			description: 'Starts a flextesa sandbox',
			options: [],
			handler: 'proxy',
			positionals: [
				PositionalArg.create({
					placeholder: 'sandboxName',
					description: 'The name of the sandbox to start',
				}),
			],
			encoding: 'none',
		}),
		Task.create({
			task: 'stop sandbox',
			command: 'stop sandbox [sandboxName]',
			aliases: ['stop flextesa'],
			description: 'Stops a flextesa sandbox',
			options: [],
			handler: 'proxy',
			positionals: [
				PositionalArg.create({
					placeholder: 'sandboxName',
					description: 'The name of the sandbox to stop',
				}),
			],
		}),
		Task.create({
			task: 'list accounts',
			command: 'list accounts <sandboxName>',
			aliases: [],
			description: 'List the balances of all sandbox accounts',
			options: [],
			handler: 'proxy',
			positionals: [
				PositionalArg.create({
					placeholder: 'sandboxName',
					description: 'The name of the sandbox to use',
				}),
			],
			encoding: 'json',
		}),
		Task.create({
			task: 'bake',
			command: 'bake <sandboxName>',
			aliases: ['b'],
			description: 'Manually bake a block. Use when the "baking" setting of a flextesa sandbox is set to "disabled".',
			options: [
				Option.create({
					flag: 'watch',
					shortFlag: 'w',
					description:
						'Watch for operations as they are injected into the mempool and bake them as immediate as possible.',
					boolean: true,
				}),
			],
			handler: 'proxy',
			encoding: 'none',
			positionals: [
				PositionalArg.create({
					placeholder: 'sandboxName',
					description: 'The name of the sandbox to stop',
				}),
			],
		}),
		Task.create({
			task: 'show protocols',
			command: 'show protocols',
			aliases: ['list protocols'],
			description: 'List protocols understood by this version of Flextesa',
			options: [],
			handler: 'proxy',
			encoding: 'json',
		}),
	],
	proxy: proxy,
}), process.argv);
