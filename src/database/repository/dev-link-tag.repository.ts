import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { DevLinkTag } from '../entity/dev-link-tag.entity';

@EntityRepository(DevLinkTag)
export class DevLinkTagRepository extends BaseRepository<DevLinkTag> { }