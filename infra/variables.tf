variable "aws_region" {
  default = "us-east-1"
}

variable "key_name" {
  default = "api-cardapio-key"
}

variable "api_port" {
  default = 3000
}

variable "ami_id" {
  description = "AMI ID para Ubuntu (ex: us-east-1 -> ami-0c02fb55956c7d316)"
  default     = "ami-0c02fb55956c7d316"
}
