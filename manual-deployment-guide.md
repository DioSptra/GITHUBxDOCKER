# Manual Deployment Guide for DevOps Portfolio Website

This guide will walk you through the process of manually deploying your DevOps portfolio website to an Ubuntu EC2 instance.

## Prerequisites

1. An AWS account
2. An EC2 instance running Ubuntu
3. SSH access to your EC2 instance
4. A domain name (optional)

## Step 1: Set Up Your EC2 Instance

1. **Launch an EC2 instance**:
   - Choose Ubuntu Server (latest LTS version)
   - Select an instance type (t2.micro is eligible for free tier)
   - Configure security groups to allow HTTP (port 80), HTTPS (port 443), and SSH (port 22)
   - Launch the instance and download your key pair

2. **Connect to your instance**:
   ```bash
   ssh -i your-key-pair.pem ubuntu@your-ec2-public-ip
   ```

## Step 2: Install Required Software

Run the following commands to install the necessary software:

```bash
# Update package lists
sudo apt update

# Upgrade installed packages
sudo apt upgrade -y

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node -v
npm -v

# Install Nginx
sudo apt install -y nginx

# Start Nginx and enable it to start on boot
sudo systemctl start nginx
sudo systemctl enable nginx

# Verify Nginx is running
sudo systemctl status nginx
```

## Step 3: Configure Nginx

1. **Create a new Nginx configuration file**:

```bash
sudo nano /etc/nginx/sites-available/portfolio
```

2. **Add the following configuration**:

```nginx
server {
    listen 80;
    server_name _;  # Replace with your domain name if you have one

    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 10240;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml;
    gzip_disable "MSIE [1-6]\.";
}
```

3. **Enable the site and remove the default site**:

```bash
sudo ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
```

4. **Test the Nginx configuration**:

```bash
sudo nginx -t
```

5. **Restart Nginx**:

```bash
sudo systemctl restart nginx
```

## Step 4: Set Up the Web Directory

```bash
# Create the web directory if it doesn't exist
sudo mkdir -p /var/www/html

# Set permissions
sudo chown -R ubuntu:ubuntu /var/www/html
sudo chmod -R 755 /var/www/html
```

## Step 5: Build and Deploy Your Website

On your local machine:

1. **Build your React application**:

```bash
npm run build
```

2. **Copy the build files to your EC2 instance**:

```bash
scp -i your-key-pair.pem -r dist/* ubuntu@your-ec2-public-ip:/var/www/html/
```

Alternatively, you can build directly on the server:

1. **Clone your repository on the EC2 instance**:

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

2. **Install dependencies and build**:

```bash
npm install
npm run build
```

3. **Copy build files to the web directory**:

```bash
sudo cp -r dist/* /var/www/html/
```

## Step 6: Set Up SSL with Let's Encrypt (Optional)

If you have a domain name pointing to your EC2 instance:

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtain and install SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Follow the prompts to complete the setup
```

## Step 7: Verify Your Deployment

1. Open your browser and navigate to your EC2 instance's public IP address or your domain name.
2. You should see your DevOps portfolio website.

## Updating Your Website

When you make changes to your website:

1. Build your application locally or on the server
2. Copy the new build files to the `/var/www/html/` directory
3. No need to restart Nginx for static content updates

## Troubleshooting

- **Website not accessible**: Check Nginx status with `sudo systemctl status nginx`
- **Permission issues**: Verify directory permissions with `ls -la /var/www/html`
- **Nginx configuration errors**: Check logs with `sudo tail -f /var/log/nginx/error.log`

## Security Recommendations

1. Set up a firewall with UFW:
   ```bash
   sudo apt install -y ufw
   sudo ufw allow 'Nginx Full'
   sudo ufw allow 'OpenSSH'
   sudo ufw enable
   ```

2. Keep your system updated:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

3. Consider setting up fail2ban to protect against brute force attacks:
   ```bash
   sudo apt install -y fail2ban
   ```