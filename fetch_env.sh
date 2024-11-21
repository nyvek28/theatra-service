PARAMETER_PREFIX="/theatra-service/dev/"  # Replace this with your actual prefix

aws ssm get-parameters-by-path --path "$PARAMETER_PREFIX" --with-decryption --query "Parameters[*].[Name,Value]" --output text | while IFS=$'\t' read -r name value
do
    var_name=$(echo "$name" | sed "s|$PARAMETER_PREFIX||g" | tr '/' '_')
    echo "$var_name=$value" >> .env
done
