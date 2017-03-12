export interface Config {
  Region: string;
  S3PhotoRepoBucket: string;
  DDBImageMetadataTable: string;
  DDBAlbumMetadataTable: string;
  DescribeExecutionLambda: string;
  AccessKeyId: string;
  SecretAccessKey: string;
}

export const CONFIG: Config = {
  AccessKeyId : "AKIAJYOC7QUNAW7S2FGA",
  SecretAccessKey : "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",
  DDBAlbumMetadataTable : "photo-sharing-backend-AlbumMetadataDDBTable-15G47AW7PSP36",
  Region : "us-west-2",   // might be replaced if you launched the template in a different region
  DDBImageMetadataTable : "photo-sharing-backend-ImageMetadataDDBTable-1BGNMQLEZKR60",
  S3PhotoRepoBucket : "photo-sharing-backend-photorepos3bucket-1hafesrc47sa4",
  DescribeExecutionLambda : "photo-sharing-backend-DescribeExecutionFunction-4S64D7DR2VJ7"
};
