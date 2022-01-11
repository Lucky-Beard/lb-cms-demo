module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1a1fb92ae64e213e49ddfd32a5bc00c1'),
  },
});
