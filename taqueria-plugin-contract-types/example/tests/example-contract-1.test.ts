
import { TezosToolkit } from '@taquito/taquito';
import { tas } from '../types-file/type-aliases';
import { ExampleContract0ContractType as ContractType } from '../types-file/example-contract-1.types';

describe('example-contract-1', () => {
    const Tezos = new TezosToolkit('RPC_URL');
    let contract: ContractType = undefined as unknown as ContractType;
    beforeAll(async () => {
            contract = await Tezos.contract.at<ContractType>('DEPLOYED_CONTRACT_ADDRESS');
    });


    it('should call confirm_admin', async () => {
        
        const getStorageValue = async () => {
            const storage = await contract.storage();
            const value = storage;
            return value;
        };

        const storageValueBefore = await getStorageValue();
        
        const confirm_adminRequest = await contract.methodsObject.confirm_admin().send();
        await confirm_adminRequest.confirmation(3);
        
        const storageValueAfter = await getStorageValue();

        expect(storageValueAfter).toBe('');
    });

    it('should call pause', async () => {
        
        const getStorageValue = async () => {
            const storage = await contract.storage();
            const value = storage;
            return value;
        };

        const storageValueBefore = await getStorageValue();
        
        const pauseRequest = await contract.methodsObject.pause(true).send();
        await pauseRequest.confirmation(3);
        
        const storageValueAfter = await getStorageValue();

        expect(storageValueAfter).toBe('');
    });

    it('should call set_admin', async () => {
        
        const getStorageValue = async () => {
            const storage = await contract.storage();
            const value = storage;
            return value;
        };

        const storageValueBefore = await getStorageValue();
        
        const set_adminRequest = await contract.methodsObject.set_admin(tas.address('tz1ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456')).send();
        await set_adminRequest.confirmation(3);
        
        const storageValueAfter = await getStorageValue();

        expect(storageValueAfter).toBe('');
    });

    it('should call bid', async () => {
        
        const getStorageValue = async () => {
            const storage = await contract.storage();
            const value = storage;
            return value;
        };

        const storageValueBefore = await getStorageValue();
        
        const bidRequest = await contract.methodsObject.bid(tas.nat('42')).send();
        await bidRequest.confirmation(3);
        
        const storageValueAfter = await getStorageValue();

        expect(storageValueAfter).toBe('');
    });

    it('should call cancel', async () => {
        
        const getStorageValue = async () => {
            const storage = await contract.storage();
            const value = storage;
            return value;
        };

        const storageValueBefore = await getStorageValue();
        
        const cancelRequest = await contract.methodsObject.cancel(tas.nat('42')).send();
        await cancelRequest.confirmation(3);
        
        const storageValueAfter = await getStorageValue();

        expect(storageValueAfter).toBe('');
    });

    it('should call configure', async () => {
        
        const getStorageValue = async () => {
            const storage = await contract.storage();
            const value = storage;
            return value;
        };

        const storageValueBefore = await getStorageValue();
        
        const configureRequest = await contract.methodsObject.configure({
                opening_price: tas.mutez('42'),
                min_raise_percent: tas.nat('42'),
                min_raise: tas.mutez('42'),
                round_time: tas.nat('42'),
                extend_time: tas.nat('42'),
                asset: [{
                    fa2_address: tas.address('tz1ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456'),
                    fa2_batch: [{
                        token_id: tas.nat('42'),
                        amount: tas.nat('42'),
                    }],
                }],
                start_time: tas.timestamp(new Date()),
                end_time: tas.timestamp(new Date()),
            }).send();
        await configureRequest.confirmation(3);
        
        const storageValueAfter = await getStorageValue();

        expect(storageValueAfter).toBe('');
    });

    it('should call resolve', async () => {
        
        const getStorageValue = async () => {
            const storage = await contract.storage();
            const value = storage;
            return value;
        };

        const storageValueBefore = await getStorageValue();
        
        const resolveRequest = await contract.methodsObject.resolve(tas.nat('42')).send();
        await resolveRequest.confirmation(3);
        
        const storageValueAfter = await getStorageValue();

        expect(storageValueAfter).toBe('');
    });

});
