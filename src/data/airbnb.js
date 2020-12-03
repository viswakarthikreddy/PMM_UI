export default {
    style: `
    #layer {
      marker-file: ramp([cartodb_id], (url("https://s3.amazonaws.com/com.cartodb.users-assets.production/production/documentation/assets/20190513213949star.svg")), quantiles);
    }
    `,

    source: `
      SELECT
        *
      FROM
        cb_2013_puma10_500k
    `
};