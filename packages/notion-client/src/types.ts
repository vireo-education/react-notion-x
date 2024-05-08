import * as notion from '@vireo-education/notion-types'

export interface SignedUrlRequest {
  permissionRecord: PermissionRecord
  url: string
}

export interface PermissionRecord {
  table: string
  id: notion.ID
}

export interface SignedUrlResponse {
  signedUrls: string[]
}
