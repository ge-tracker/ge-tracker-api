import APIBaseWrapper from './APIBaseWrapper';
import { ItemListPromise } from '../../types';

export type Tag = {
    id: number;
    slug: string;
    name: string;
};

export default class TagWrapper extends APIBaseWrapper {
    getTags(): Promise<Array<Tag>> {
        return this._wrapGet('tags');
    }

    addTag(itemId: number, tag: string) {
        return this._wrapPost(`tags`, {
            item_id: itemId,
            tag,
        });
    }

    deleteTag(itemId: number, tag: string) {
        return this._wrapDelete(`tags/item/${itemId}/${tag}`);
    }

    getTaggedItems(tag: string | Array<string>): ItemListPromise {
        // Join an array to a CSV list
        if (Array.isArray(tag)) {
            tag = tag.join(',');
        }

        return this._wrapGet(`tags/${tag}`);
    }

    getItemTags(itemId: number): Promise<Array<Tag>> {
        return this._wrapGet(`tags/item/${itemId}`);
    }
}
